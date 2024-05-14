const formatTimestampToYears = (timestamp: number) => {
    const currentDate = new Date()

    const dateFromTimestamp = new Date(timestamp * 1000)

    const differenceInMilliseconds = currentDate.getTime() - dateFromTimestamp.getTime()

    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365

    const years = Math.floor(differenceInMilliseconds / millisecondsInYear)

    return years
}

export default formatTimestampToYears
