export const freezeClickEvents = (shouldFreeze: boolean): void => {
    document.body.style.pointerEvents = shouldFreeze ? 'none' : 'auto'
}