"use client";

import { useState, useEffect, useCallback } from "react";

interface GameData {
  [category: string]: string[];
}

interface FoundGroup {
  category: string;
  items: string[];
}

const ConnectionsGame = () => {
  const GAME_DATA: GameData = {
    "What's On While I Work": ["Bossa Nova", "House", "Lofi", "Liquid DnB"],
    "Morning Ritual": [
      "Coffee",
      "Second Coffee",
      "Hit Snooze 3x",
      "Stare Into Space",
    ],
    "Sports I Grew Up With": ["Hockey", "Lacrosse", "Badminton", "Volleyball"],
    "Previous Companies": ["Cisco", "Palantir", "Capital One", "WEX, Inc."],
  };

  const [allItems, setAllItems] = useState<string[]>([]);
  const [categoryMap, setCategoryMap] = useState<{ [key: string]: string }>({});
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [foundGroups, setFoundGroups] = useState<FoundGroup[]>([]);
  const [remainingItems, setRemainingItems] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [gameMessage, setGameMessage] = useState("");
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const resetGame = useCallback(() => {
    const items: string[] = [];
    const catMap: { [key: string]: string } = {};

    Object.entries(GAME_DATA).forEach(([category, categoryItems]) => {
      items.push(...categoryItems);
      categoryItems.forEach((item) => {
        catMap[item] = category;
      });
    });

    const shuffledItems = [...items].sort(() => Math.random() - 0.5);

    setAllItems(items);
    setCategoryMap(catMap);
    setRemainingItems(shuffledItems);
    setSelectedItems([]);
    setFoundGroups([]);
    setMistakes(0);
    setGameMessage("");
    setGameWon(false);
    setGameOver(false);
  }, []);

  useEffect(() => {
    resetGame();
  }, [resetGame]);

  const toggleItemSelection = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else if (selectedItems.length < 4) {
      setSelectedItems([...selectedItems, item]);
    }
    setGameMessage("");
  };

  const checkGuess = () => {
    if (selectedItems.length !== 4) return;

    const categories = selectedItems.map((item) => categoryMap[item]);
    const uniqueCategories = [...new Set(categories)];

    if (uniqueCategories.length === 1) {
      const category = categories[0];
      const newFoundGroup: FoundGroup = {
        category,
        items: [...selectedItems],
      };

      setFoundGroups([...foundGroups, newFoundGroup]);
      setRemainingItems(
        remainingItems.filter((item) => !selectedItems.includes(item))
      );
      setSelectedItems([]);
      setGameMessage(`Correct! Found: ${category}`);

      if (foundGroups.length + 1 === 4) {
        setGameWon(true);
        setGameMessage("🎉 Congratulations! You found all groups!");
      }
    } else {
      const categoryCount: { [key: string]: number } = {};
      categories.forEach((cat) => {
        categoryCount[cat] = (categoryCount[cat] || 0) + 1;
      });

      const maxCount = Math.max(...Object.values(categoryCount));

      if (maxCount === 3) {
        setGameMessage("One away! 🤏");
      } else {
        setGameMessage("Not quite right. Try again!");
      }

      setMistakes(mistakes + 1);
      setSelectedItems([]);

      if (mistakes + 1 >= 4) {
        setGameOver(true);
        setGameMessage("Game Over! You made too many mistakes.");
      }
    }
  };

  const shuffleItems = () => {
    setRemainingItems([...remainingItems].sort(() => Math.random() - 0.5));
    setGameMessage("");
  };

  const deselectAll = () => {
    setSelectedItems([]);
    setGameMessage("");
  };

  const getGroupColors = (index: number) => {
    const colors = [
      "bg-[#E8F5E8] border-[#4CAF50]", // green
      "bg-[#E3F2FD] border-[#2196F3]", // blue
      "bg-[#FFF3E0] border-[#FF9800]", // orange
      "bg-[#F3E5F5] border-[#9C27B0]", // purple
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="condensed-section px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-left mb-6">
          <h2 className="font-heading text-3xl text-[#2F4156]">
            Connections About Me!
          </h2>
          <p className="text-[#666666] max-w-2xl">
            Find groups of 4 related items that describe my background, skills,
            and interests.
          </p>
        </div>

        <div className="box-3d p-6">
          {foundGroups.length > 0 && (
            <div className="mb-6 space-y-3">
              {foundGroups.map((group, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 ${getGroupColors(index)}`}
                >
                  <h3 className="font-medium text-center text-[#2F4156] mb-2">
                    {group.category}
                  </h3>
                  <p className="text-center text-sm text-[#666666]">
                    {group.items.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-between items-center mb-6 text-sm">
            <span className="text-[#666666]">Mistakes: {mistakes}/4</span>
            <span className="text-[#666666]">
              Groups Found: {foundGroups.length}/4
            </span>
            {gameWon && (
              <span className="text-green-600 font-medium">🎉 You Won!</span>
            )}
            {gameOver && (
              <span className="text-red-600 font-medium">💀 Game Over!</span>
            )}
          </div>

          {gameMessage && (
            <div
              className={`p-3 rounded-lg text-center text-sm font-medium mb-6 ${
                gameMessage.includes("Correct")
                  ? "bg-green-100 text-green-700"
                  : gameMessage.includes("One away")
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {gameMessage}
            </div>
          )}

          {!gameWon && !gameOver && (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6">
                {remainingItems.map((item, index) => (
                  <button
                    key={`${item}-${index}`}
                    onClick={() => toggleItemSelection(item)}
                    className={`p-3 sm:p-4 text-xs sm:text-sm font-medium rounded-lg border-2 transition-all duration-200 min-h-[70px] sm:min-h-[80px] flex items-center justify-center text-center ${
                      selectedItems.includes(item)
                        ? "bg-[#2F4156] text-[#F5EFEB] border-[#2F4156] transform scale-105"
                        : "bg-white text-[#2F4156] border-[#E8E0DA] hover:border-[#2F4156] hover:bg-[#F5EFEB]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <button
                  onClick={checkGuess}
                  disabled={selectedItems.length !== 4}
                  className="px-4 sm:px-6 py-2 bg-[#2F4156] text-[#F5EFEB] rounded-lg text-xs sm:text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#3D5068] transition-colors"
                >
                  Submit Guess
                </button>
                <button
                  onClick={shuffleItems}
                  className="px-4 sm:px-6 py-2 border-2 border-[#2F4156] text-[#2F4156] rounded-lg text-xs sm:text-sm font-medium hover:bg-[#2F4156] hover:text-[#F5EFEB] transition-colors"
                >
                  Shuffle
                </button>
                <button
                  onClick={deselectAll}
                  className="px-4 sm:px-6 py-2 bg-[#E8E0DA] text-[#2F4156] rounded-lg text-xs sm:text-sm font-medium hover:bg-[#2F4156] hover:text-[#F5EFEB] transition-colors"
                >
                  Deselect All
                </button>
              </div>
            </>
          )}

          {(gameWon || gameOver) && (
            <div className="text-center">
              <button
                onClick={resetGame}
                className="px-8 py-3 bg-[#2F4156] text-[#F5EFEB] rounded-lg font-medium hover:bg-[#3D5068] transition-colors"
              >
                New Game
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConnectionsGame;
