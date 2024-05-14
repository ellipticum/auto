const formatTimestampToMonths = (timestamp: number) => {
    const currentDate = new Date()

    const dateFromTimestamp = new Date(timestamp * 1000)

    const differenceInMilliseconds = currentDate.getTime() - dateFromTimestamp.getTime()

    const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30

    return Math.floor(differenceInMilliseconds / millisecondsInMonth)
}

export default formatTimestampToMonths
