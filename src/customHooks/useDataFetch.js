import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useDataFetch = (fetchActionCreator) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchActionCreator());
    }, [])
}