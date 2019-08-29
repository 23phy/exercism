package gigasecond

import "time"

const gigasecond time.Duration = time.Duration(1e9 * time.Second)

// AddGigasecond adds 10 ^ 9 seconds to a given date and returns it.
func AddGigasecond(startDate time.Time) time.Time {
	return startDate.Add(gigasecond)
}
