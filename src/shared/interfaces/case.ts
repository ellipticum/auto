import PlayingRole from '@/shared/enums/playing-role'

export interface ILender {
  id: number
  userId: number
  firstName: string
  lastName: string
  sum: number
  avatar: string
  organization: string
  playingRole: PlayingRole
}

interface ICase {
  id: number
  gameId: number
  description: string
  organization: string
  judge: string
  arbitrationManager: string
  stage: number
  lenders: ILender[]
}

export default ICase
