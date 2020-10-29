import { useEffect } from "react"
import { useDispatch } from "react-redux"

const useDispatchAction = (action) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(action())
	}, [dispatch, action])
}

export default useDispatchAction
