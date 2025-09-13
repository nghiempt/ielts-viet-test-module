        <div className="flex items-center">
          <div className="flex justify-center items-center">
            {passages.map((passage) => (
              <PassageProgressBar
                key={passage.id}
                passageNumber={passage.id}
                currentQuestion={passage.answeredQuestions}
                totalQuestions={passage.endQuestion - passage.startQuestion + 1}
                choosenPassage={selectedPassage === passage.id}
                onClick={() => handlePassageSelect(passage.id)}
              />
            ))}
          </div>
          <div className="text-sm flex flex-col items-center mr-3">
            <div>Đã làm</div>
            <div className="font-semibold">
              <span
                className={`${
                  passages.reduce(
                    (acc, passage) => acc + passage.answeredQuestions,
                    0
                  ) === allQuestions.length
                    ? "text-[#FA812F]"
                    : ""
                }`}
              >
                {passages.reduce(
                  (acc, passage) => acc + passage.answeredQuestions,
                  0
                )}
              </span>
              <span className="text-[#FA812F]">/{allQuestions.length}</span>
            </div>
          </div>
          <ViewModeToggle switchReading={switchReading} setSwitchReading={setSwitchReading} className="mr-4" />
          <div className="bg-gray-100 px-3 py-1 rounded-full flex justify-center items-center w-24">
