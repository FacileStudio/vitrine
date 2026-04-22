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
        <div className="lg:hidden flex flex-col items-center justify-center gap-8 mt-4">
            <div className="flex items-center gap-2">
                {data.map((_, id) => (
                    <button
                        key={id}
                        onClick={() => setSelectedWorkId(id)}
                        className={`h-1 rounded-full transition-all duration-300 ${
                            selectedWorkId === id
                                ? 'w-8 bg-[#CAE6D8]'
                                : 'w-2 bg-[#CAE6D8]/40'
                        }`}
                        aria-label={`Go to work ${id + 1}`}
                    />
                ))}
            </div>

            <div className={"flex gap-2"}>
                <button
                    onClick={handlePrevious}
                    className="p-3 rounded-full bg-[#CAE6D8]/10 border border-[#CAE6D8]/30 text-[#CAE6D8] active:scale-95 transition-all duration-200"
                    aria-label="Previous work"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-[#CAE6D8]/10 border border-[#CAE6D8]/30 text-[#CAE6D8] active:scale-95 transition-all duration-200"
                    aria-label="Next work"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    )
}