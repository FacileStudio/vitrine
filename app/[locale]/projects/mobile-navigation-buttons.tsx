import React from "react";
import data from "./projects.json";

interface MobileButtonsProps {
    selectedWorkId: number | null;
    setSelectedWorkId: React.Dispatch<React.SetStateAction<number | null>>;
    handleNext: () => void;
    handlePrevious: () => void;
};

export const MobileNavigationButtons: React.FC<MobileButtonsProps> = ({ selectedWorkId, setSelectedWorkId, handleNext, handlePrevious }) => {
    return (
        <div>
            <div>
                {data.map((_, id) => (
                    <button
                        key={id}
                        onClick={() => setSelectedWorkId(id)}
                        aria-current={selectedWorkId === id}
                        aria-label={`Go to work ${id + 1}`}
                    />
                ))}
            </div>

            <div>
                <button onClick={handlePrevious} aria-label="Previous work">‹</button>
                <button onClick={handleNext} aria-label="Next work">›</button>
            </div>
        </div>
    )
}
