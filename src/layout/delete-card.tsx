import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { DELETE_CARD } from '../lib/cardMutation';

const DeleteCardButton = ({cardId}:any) => {
  const navigate = useNavigate();
  const [ deleteCard ] = useMutation(DELETE_CARD, {
    variables: { id: cardId },
    onCompleted: () => navigate('/'),
  })

  return (
    <>
      <button className='delete' onClick={() =>deleteCard}>
        Delete
      </button>
    </>
  )
}

export default DeleteCardButton