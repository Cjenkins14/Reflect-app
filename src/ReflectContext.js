import React from 'react';

export default React.createContext({
    entries: [],
    habits: [],
    addHabit: () => { },
    deleteHabit: () => { },
    addEntry: () => { },
    deleteEntry: () => { },
    handleEntryUpdate: () => { }
})