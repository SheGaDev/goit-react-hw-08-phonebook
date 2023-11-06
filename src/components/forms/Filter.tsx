import { ChangeEvent, useEffect } from 'react';
import { changeFilter } from 'redux/slice/filter-slice';
import { useAppDispatch } from 'redux/store';

const Filter = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(changeFilter(''));
    };
  }, []);

  const onChangeFilter = (e: ChangeEvent) => {
    const { value }: { value: string } = e.target as HTMLInputElement;
    dispatch(changeFilter(value));
  };

  return (
    <div className='flex w-[100%] flex-col items-center justify-center rounded bg-black'>
      <label className='m-2 flex w-[50%] flex-col items-center gap-2 text-white'>
        Search contact
        <input
          className='w-[100%] text-black'
          onChange={onChangeFilter}
          type='text'
          name='filter'
        />
      </label>
    </div>
  );
};

export default Filter;
