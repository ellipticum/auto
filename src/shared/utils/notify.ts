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

    const message = error ? error : result ? 'Операция выполнена' : 'Что-то пошло не так'

    const code = result ? 200 : 400

    setMessage(message)
    setStatus(determineStatus(code))
    setIsNotificationHidden(false)
}

export default notify
