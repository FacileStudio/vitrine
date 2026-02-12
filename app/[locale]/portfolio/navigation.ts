import React from "react";
import data from "./projects.json"

const usePortfolioNavigation = () => {
    const [selectedWorkId, setSelectedWorkId] = React.useState<number | null>(null);

    function handlePrevious() {
        setSelectedWorkId((prev) => {
            if (prev === null || prev === 0) return data.length - 1;
            return prev - 1;
        });
    };

    function handleNext() {
        setSelectedWorkId((prev) => {
            if (prev === null || prev === data.length - 1) return 0;
            return prev + 1;
        });
    };

    return {
        setSelectedWorkId,
        selectedWorkId,
        handlePrevious,
        handleNext
    };
};

export {usePortfolioNavigation};
