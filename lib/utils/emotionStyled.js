
export const globalOptions = {
    shouldForwardProp: prop =>
        prop !== "data-m" && prop !== "data-w"
};
