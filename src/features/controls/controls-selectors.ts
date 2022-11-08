import { RootState } from "store";

const selectControls = (state: RootState) => state.controls;
const selectSearchStr = (state: RootState) => state.controls.searchStr;
const selectRegion = (state: RootState) => state.controls.region;

export { selectControls, selectSearchStr, selectRegion };