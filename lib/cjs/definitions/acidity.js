const pH = {
    pH: {
        name: {
            singular: 'pH',
            plural: 'pH',
        },
        to_anchor: 1,
    },
};
const pOH = {
    pOH: {
        name: {
            singular: 'pOH',
            plural: 'pOH',
        },
        to_anchor: 1,
    },
};
const measure = {
    systems: {
        pH,
        pOH,
    },
    anchors: {
        pH: {
            pOH: {
                // pH to pOH: pOH = 14 - pH
                transform: function (value, cls) {
                    return cls.sub(14, value);
                },
            },
        },
        pOH: {
            pH: {
                // pOH to pH: pH = 14 - pOH
                transform: function (value, cls) {
                    return cls.sub(14, value);
                },
            },
        },
    },
};
export default measure;
