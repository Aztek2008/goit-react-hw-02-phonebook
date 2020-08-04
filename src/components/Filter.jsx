import React from "react";

export default function Filter({ state, onChangeFilter }) {
  return (
    <label>
      <input
        type="text"
        name="filter"
        value={state.filter}
        onChange={(e) => onChangeFilter(e.target)}
        placeholder="Search contact..."
      />
    </label>
  );
}
