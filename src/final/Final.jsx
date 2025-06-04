import { useState, useMemo, useEffect, useCallback, Fragment } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ENDINGS, ENDING_DETAILS, STORY_STEPS, STORY } from "./story";
import Header from "../components/Header";
import EndingCard from "./EndingCard";
import "./Final.css";

const Final = () => {
  const [currentStep, setCurrentStep] = useState(STORY_STEPS.start);
  const [unlockedEndings, setUnlockedEndings] = useLocalStorage("endings", {});

  // the current story step. { isRobotPov, text, options, ending, finished }
  const story = useMemo(() => STORY[currentStep], [currentStep]);

  const goToStep = useCallback(
    (nextStep) => {
      setCurrentStep(nextStep);
      // reset page scroll
      document.getElementById("story-page").scrollTop = 0;
    },
    [setCurrentStep]
  );
  const goToBeginning = useCallback(
    () => goToStep(STORY_STEPS.start),
    [goToStep]
  );

  const ending = useMemo(() => ENDING_DETAILS[story?.ending], [story]);

  const unlockEnding = useCallback(
    (newEnding) => {
      if (unlockedEndings[newEnding]) return;

      setUnlockedEndings({ ...unlockedEndings, [newEnding]: true });
    },
    [setUnlockedEndings, unlockedEndings]
  );

  // if i've reached a story step with an ending, mark ending as unlocked
  useEffect(() => {
    if (story && story.ending && !unlockedEndings[story.ending])
      unlockEnding(story.ending);
  }, [story, unlockEnding, unlockedEndings]);

  return (
    <div className="story-page" id="story-page">
      <Header>
        <button>How to play</button>
        <button>View endings</button>
      </Header>

      <div className="story-section">
        <div className="lines">
          <p className="story-text">
            {currentStep !== STORY_STEPS.start && (
              <>
                <span className="option" onClick={goToBeginning}>
                  {"<"} Back to beginning
                </span>
                <br />
                <br />
              </>
            )}

            {story?.text.split("\n").map((t) => (
              <Fragment key={t}>
                {t}
                <br />
                <br />
              </Fragment>
            )) ?? (
              <span>
                It seems you have found an unfinished part of the story. Please
                go back to the beginning and try another option.
              </span>
            )}

            {story?.options &&
              story.options.map((option) => (
                <>
                  <span
                    key={option.text}
                    className="option"
                    onClick={() => goToStep(option.next)}
                  >
                    {"> " + option.text}
                  </span>
                  <br />
                </>
              ))}
          </p>
          {story?.ending && (
            <EndingCard ending={ending} reset={goToBeginning} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Final;
