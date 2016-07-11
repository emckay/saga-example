/**
 * Iterate saga until done -- don't call this on infinite loop sagas.
 * Data from optional parameter will be passed one at a time on each iteration.
 * @param {object} generator - A saga generator.
 * @param {array} data - Array of data to be passed into the saga.
 * @return {string} The blended color.
 */
export const getAllEffects = (generator, data = []) => {
    const effects = [];
    let next = generator.next(data.shift());

    while (next.done !== true) {
        effects.push(next.value);
        next = generator.next(data.shift());
    }

    return effects;
};
