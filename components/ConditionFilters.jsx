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

export default function ConditionFilters({
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
  setChalkey,
  setPeaty,
  setSandy,
}) {
  const [openCat, setCatOpen] = React.useState(false);
  const [openClimate, setClimateOpen] = React.useState(false);
  const [openSoil, setSoilOpen] = React.useState(false);
  const [openWater, setWaterOpen] = React.useState(false);

  return (
    <div className="box">
      <div className="type-filter">
        <FontAwesomeIcon
          className="icon"
          icon={faList}
          onClick={() => {
            console.log("icon clicked and Climate stat", openCat, openClimate);
            setCatOpen(!openCat);
            setClimateOpen(false);
            setWaterOpen(false);
            setSoilOpen(false);
          }}
        />
        <StyledFilterForm open={openCat}>
          <div className="box">
            <input
              type="checkbox"
              id="type"
              value="organic"
              name="type"
              onChange={(event) => {
                setOrganic(event.target.checked);
              }}
            />
            <label htmlFor="type">Organic</label>

            <input
              type="checkbox"
              id="type"
              value="openPollinated"
              name="type"
              onChange={(event) => {
                setOpenPollinated(event.target.checked);
              }}
            />
            <label htmlFor="type">Open Pollinated</label>

            <input
              type="checkbox"
              id="type"
              value="hybrid"
              name="type"
              onChange={(event) => {
                setHybrid(event.target.checked);
              }}
            />
            <label htmlFor="type">Hybrid</label>
          </div>
        </StyledFilterForm>
      </div>
      <div className="type-climate">
        <FontAwesomeIcon
          className="icon"
          icon={faCloudSunRain}
          onClick={() => {
            console.log("cloud clicked", openClimate);
            setClimateOpen(!openClimate);
            setCatOpen(false);
            setWaterOpen(false);
            setSoilOpen(false);
          }}
        />
        <StyledFilterForm open={openClimate}>
          <div className="box">
            <input
              type="checkbox"
              id="climate"
              value="sunny"
              name="climate"
              onChange={(event) => {
                setSunny(event.target.checked);
              }}
            />
            <label htmlFor="type">Sunny</label>

            <input
              type="checkbox"
              id="climate"
              value="shady"
              name="climate"
              onChange={(event) => {
                setShady(event.target.checked);
              }}
            />
            <label htmlFor="type">Shady</label>

            <input
              type="checkbox"
              id="water"
              value="humid"
              name="water"
              onChange={(event) => {
                setHumid(event.target.checked);
              }}
            />
            <label htmlFor="type">Humid</label>
          </div>
        </StyledFilterForm>
      </div>
      <div className="type-water">
        <FontAwesomeIcon
          className="icon"
          icon={faDroplet}
          onClick={() => {
            console.log("water clicked", openWater);
            setWaterOpen(!openWater);
            setCatOpen(false);
            setClimateOpen(false);
            setSoilOpen(false);
          }}
        />
        <StyledFilterForm open={openWater}>
          <div className="box">
            <input
              type="checkbox"
              id="water"
              value="lotsOfWater"
              name="water"
              onChange={(event) => {
                setLotsOfWater(event.target.checked);
              }}
            />
            <label htmlFor="type">Lots of water</label>

            <input
              type="checkbox"
              id="water"
              value="dry"
              name="water"
              onChange={(event) => {
                setDry(event.target.checked);
              }}
            />
            <label htmlFor="type">Dry</label>
          </div>
        </StyledFilterForm>
      </div>
      <div className="type-soil">
        <FontAwesomeIcon
          className="icon"
          icon={faEarthEurope}
          onClick={() => {
            console.log("water clicked", openSoil);
            setSoilOpen(!openSoil);
            setCatOpen(false);
            setClimateOpen(false);
            setWaterOpen(false);
          }}
        />
        <StyledFilterForm open={openSoil}>
          <div className="box">
            <input
              type="checkbox"
              id="soil"
              value="clay"
              name="soil"
              onChange={(event) => {
                setClay(event.target.checked);
              }}
            />
            <label htmlFor="type">Clay</label>

            <input
              type="checkbox"
              id="soil"
              value="wellDrained"
              name="soil"
              onChange={(event) => {
                setDrained(event.target.checked);
              }}
            />
            <label htmlFor="type">Well-drained</label>

            <input
              type="checkbox"
              id="soil"
              value="peaty"
              name="soil"
              onChange={(event) => {
                setPeaty(event.target.checked);
              }}
            />
            <label htmlFor="type">Peaty</label>

            <input
              type="checkbox"
              id="soil"
              value="chalky"
              name="soil"
              onChange={(event) => {
                setChalkey(event.target.checked);
              }}
            />
            <label htmlFor="type">Chalky</label>

            <input
              type="checkbox"
              id="soil"
              value="sandy"
              name="soil"
              onChange={(event) => {
                setSandy(event.target.checked);
              }}
            />
            <label htmlFor="type">Sandy</label>
          </div>
        </StyledFilterForm>
      </div>
    </div>
  );
}
