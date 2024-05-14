import Statuses from '@/shared/statuses'

import useNotificationStore from '@/widgets/notification/model/store'

const determineStatus = (code: number) => {
    if (code >= 400) {
        return Statuses.Code.Failed
    } else if (code >= 300) {
        return Statuses.Code.Warning
    } else if (code >= 200) {
        return Statuses.Code.Success
    } else {
        return Statuses.Code.Info
    }
}

const notify = ({ result, errors, error }: { result?: any; errors?: any; error?: any }) => {
    const { setMessage, setStatus, setIsNotificationHidden } = useNotificationStore.getState()

    console.log(result, errors, error)

    const message = error ? error : errors ? 'Что-то пошло не так' : 'Успешное выполнение операции'

    console.log(message)

    const code = result ? 200 : 400

    setMessage(message)
    setStatus(determineStatus(code))
    setIsNotificationHidden(false)
}

export default notify
