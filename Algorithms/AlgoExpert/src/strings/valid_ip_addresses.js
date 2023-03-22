/**
  * Solution was solved by Rahil Khurshid Ali
  */
function validIPAddresses(str) {
	const ipsFound = [];
	const len = str.length;

	for (let i = 1; i < Math.min(len, 4); i++) {
		segments = ['', '', '', ''];
		segments[0] = str.slice(0, i);

		if (!isValidSegment(segments[0])) {
			continue;
		}

		for (let j = i + 1; j < i + Math.min(len - 1, 4); j++) {
			segments[1] = str.slice(i, j);

			if (!isValidSegment(segments[1])) {
				continue;
			}

			for (let k = j + 1; k < j + Math.min(len - j, 4); k++) {
				segments[2] = str.slice(j, k);
				segments[3] = str.substring(k);

				if (isValidSegment(segments[2]) && isValidSegment(segments[3])) {
					ipsFound.push(segments.join('.'));
				}
			}
		}
	}

	return ipsFound;
}

function isValidSegment(segment) {
	const segmentInt = parseInt(segment);
	if (segmentInt > 255) {
		return false;
	}

	return segment.length === segmentInt.toString().length;
}

// Do not edit the line below.
exports.validIPAddresses = validIPAddresses;