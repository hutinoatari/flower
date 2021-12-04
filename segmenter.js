const segmentsToArray = (segments) => {
    const array = [];
    for(const seg of segments) array.push(seg.segment);
    return array;
}

const meanSplit = (text) => {
    const segmenter = new Intl.Segmenter("ja", {granularity: "word"});
    const segments = segmenter.segment(text);
    const segmentsArray = segmentsToArray(segments);
    return segmentsArray;
}

export default meanSplit;