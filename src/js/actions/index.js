export const chooseBookBinding = bookBinding => ({ type: 'CHOOSE_BOOKBINDING', payload: bookBinding });
export const chooseColor = color => ({ type: 'CHOOSE_COLOR', payload: color });
export const choosePagesNumber = pages => ({ type: 'CHOOSE_PAGES_NUMBER', payload: pages });
export const chooseGilding = gilding => ({ type: 'CHOOSE_GILDING', payload: gilding });
export const chooseFormat = format => ({ type: 'CHOOSE_FORMAT', payload: format });
export const nextStep = () => ({ type: 'NEXT_STEP' });
export const previousStep = () => ({ type: 'PREVIOUS_STEP' });
