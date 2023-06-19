import React from 'react';
import PropTypes from 'prop-types';
import { setContactsFilter } from './../../redux/filtersSlice';
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";
import css from './Filter.module.css'

function Filter() {
  const {filter} = useSelector(getFilter);
  const dispatch = useDispatch();
  const filterChange = (e) => {
    dispatch(setContactsFilter(e.target.value));
  }
    return (
      <div className={css.filterWrapp}>
        <p className={css.filterTitle}>Find contacts by name</p>
        <input className={css.filterInput}
          type="text"
          name="filter"
          required
          value={filter}
          onChange={filterChange}
        />
      </div>
    );
}

Filter.propTypes = {
  filter: PropTypes.string,
  filterChange: PropTypes.func,
};

export default Filter;
