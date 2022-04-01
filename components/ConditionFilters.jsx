import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSunRain,
  faList,
  faDroplet,
  faEarthEurope,
} from "@fortawesome/free-solid-svg-icons";
import { updateObjState } from "../helper-functions";
import StyledFilterForm from "./styled-components/StyledFilter";
import StyledButton from "./styled-components/StyledButton";
import StyledConditionFilters from "./styled-components/StyledConditionFIlters";

export default function ConditionFilters({
  organic,
  openPollinated,
  hybrid,
  sunny,
  shady,
  humid,
  dry,
  lotsOfWater,
  clay,
  drained,
  chalky,
  peaty,
  sandy,
  setOrganic,
  setOpenPollinated,
  setHybrid,
  setSunny,
  setShady,
  setHumid,
  setDry,
  setLotsOfWater,
  setClay,
  setDrained,
  setChalky,
  setPeaty,
  setSandy,
}) {
  const [openCat, setCatOpen] = React.useState(false);
  const [openClimate, setClimateOpen] = React.useState(false);
  const [openSoil, setSoilOpen] = React.useState(false);
  const [openWater, setWaterOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  return (
    <div>
      <div className="filter-box">
        <StyledConditionFilters className="filter-icon-bar">
          <div className="label-div">
            <p className="filter-label">Category</p>
            <button
              className="filter-button"
              onClick={() => {
                setCatOpen(!openCat);
                setClimateOpen(false);
                setWaterOpen(false);
                setSoilOpen(false);
              }}
            >
              <FontAwesomeIcon className="filter-icon" icon={faList} />
            </button>
          </div>
          <div className="label-div">
            <p className="filter-label">Climate</p>
            <button
              className="filter-button"
              onClick={() => {
                setClimateOpen(!openClimate);
                setCatOpen(false);
                setWaterOpen(false);
                setSoilOpen(false);
              }}
            >
              <FontAwesomeIcon className="filter-icon" icon={faCloudSunRain} />
            </button>
          </div>
          <div className="label-div">
            <p className="filter-label">Water</p>
            <button
              className="filter-button"
              onClick={() => {
                setWaterOpen(!openWater);
                setCatOpen(false);
                setClimateOpen(false);
                setSoilOpen(false);
              }}
            >
              <FontAwesomeIcon className="filter-icon" icon={faDroplet} />
            </button>
          </div>
          <div className="label-div">
            <p className="filter-label"> Soil Type</p>
            <button
              className="filter-button"
              onClick={() => {
                setSoilOpen(!openSoil);
                setCatOpen(false);
                setClimateOpen(false);
                setWaterOpen(false);
              }}
            >
              <FontAwesomeIcon className="filter-icon" icon={faEarthEurope} />
            </button>
          </div>
          <StyledButton
            className="clear-filter"
            onClick={() => {
              setOrganic(false);
              setOpenPollinated(false);
              setHybrid(false);
              setSunny(false);
              setShady(false);
              setHumid(false);
              setDry(false);
              setLotsOfWater(false);
              setClay(false);
              setDrained(false);
              setChalky(false);
              setPeaty(false);
              setSandy(false);
            }}
          >
            Clear filters
          </StyledButton>
        </StyledConditionFilters>
      </div>
      <div className="forms">
        <div className="type-filter cond-filter">
          <StyledFilterForm open={openCat}>
            <div className="box">
              <span>
                <input
                  type="checkbox"
                  id="type"
                  value="organic"
                  name="type"
                  checked={organic}
                  onChange={(event) => {
                    setOrganic(event.target.checked);
                  }}
                />
                <label htmlFor="type">Organic</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  id="type"
                  value="openPollinated"
                  name="type"
                  checked={openPollinated}
                  onChange={(event) => {
                    setOpenPollinated(event.target.checked);
                  }}
                />
                <label htmlFor="type">Open Pollinated</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  id="type"
                  value="hybrid"
                  name="type"
                  checked={hybrid}
                  onChange={(event) => {
                    setHybrid(event.target.checked);
                  }}
                />
                <label htmlFor="type">Hybrid</label>
              </span>
            </div>
          </StyledFilterForm>
        </div>
        <div className="type-climate cond-filter">
          <StyledFilterForm open={openClimate}>
            <div className="box">
              <span>
                <input
                  type="checkbox"
                  id="climate"
                  value="sunny"
                  name="climate"
                  checked={sunny}
                  onChange={(event) => {
                    setSunny(event.target.checked);
                  }}
                />
                <label htmlFor="type">Sunny</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  id="climate"
                  value="shady"
                  name="climate"
                  checked={shady}
                  onChange={(event) => {
                    setShady(event.target.checked);
                  }}
                />
                <label htmlFor="type">Shady</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  id="water"
                  value="humid"
                  name="water"
                  checked={humid}
                  onChange={(event) => {
                    setHumid(event.target.checked);
                  }}
                />
                <label htmlFor="type">Humid</label>
              </span>
            </div>
          </StyledFilterForm>
        </div>
        <div className="type-water cond-filter">
          <StyledFilterForm open={openWater}>
            <div className="box">
              <span>
                <input
                  type="checkbox"
                  id="water"
                  value="lotsOfWater"
                  name="water"
                  checked={lotsOfWater}
                  onChange={(event) => {
                    setLotsOfWater(event.target.checked);
                  }}
                />
                <label htmlFor="type">Lots of water</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  id="water"
                  value="dry"
                  name="water"
                  checked={dry}
                  onChange={(event) => {
                    setDry(event.target.checked);
                  }}
                />
                <label htmlFor="type">Dry</label>
              </span>
            </div>
          </StyledFilterForm>
        </div>
        <div className="type-soil  cond-filter">
          <StyledFilterForm open={openSoil}>
            <div className="box">
              <span>
                <input
                  type="checkbox"
                  id="soil"
                  value="clay"
                  name="soil"
                  checked={clay}
                  onChange={(event) => {
                    setClay(event.target.checked);
                  }}
                />
                <label htmlFor="type">Clay</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  id="soil"
                  value="wellDrained"
                  name="soil"
                  checked={drained}
                  onChange={(event) => {
                    setDrained(event.target.checked);
                  }}
                />
                <label htmlFor="type">Well-drained</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  id="soil"
                  value="peaty"
                  name="soil"
                  checked={peaty}
                  onChange={(event) => {
                    setPeaty(event.target.checked);
                  }}
                />
                <label htmlFor="type">Peaty</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  id="soil"
                  value="chalky"
                  name="soil"
                  checked={chalky}
                  onChange={(event) => {
                    setChalky(event.target.checked);
                  }}
                />
                <label htmlFor="type">Chalky</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  id="soil"
                  value="sandy"
                  name="soil"
                  checked={sandy}
                  onChange={(event) => {
                    setSandy(event.target.checked);
                  }}
                />
                <label htmlFor="type">Sandy</label>
              </span>
            </div>
          </StyledFilterForm>
        </div>
      </div>
    </div>
  );
}
