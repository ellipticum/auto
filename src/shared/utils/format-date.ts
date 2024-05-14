const formatDate = (date: Date): string => {
    const today = new Date()

    const diff = (date.getTime() - today.getTime()) / (1000 * 3600 * 24)

    if (diff === 0) {
        return 'Сегодня'
    } else if (diff === -1) {
        return 'Вчера'
    } else if (diff === 1) {
        return 'Завтра'
    } else {
        return date.toLocaleDateString('ru-RU')
    }
}

export default formatDate
