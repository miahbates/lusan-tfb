import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSunRain,
  faList,
  faDroplet,
  faEarthEurope,
} from "@fortawesome/free-solid-svg-icons";

export default function ConditionFilters() {
  return (
    <div className="box">
      <form method="POST" action="/api/condition-filters">
        <div className="box">
          <FontAwesomeIcon className="icon" icon={faList} />
          <input type="checkbox" id="type" value="organic" name="type" />
          <label htmlFor="type">Organic</label>

          <input type="checkbox" id="type" value="openPollinated" name="type" />
          <label htmlFor="type">Open Pollinated</label>

          <input type="checkbox" id="type" value="hybrid" name="type" />
          <label htmlFor="type">Hybrid</label>

          <button type="submit">Save</button>
        </div>
      </form>

      <form method="POST" action="/api/condition-filters">
        <div className="box">
          <FontAwesomeIcon className="icon" icon={faCloudSunRain} />
          <input type="checkbox" id="climate" value="sunny" name="climate" />
          <label htmlFor="type">Sunny</label>

          <input type="checkbox" id="climate" value="dry" name="climate" />
          <label htmlFor="type">Dry</label>

          <input type="checkbox" id="climate" value="shady" name="climate" />
          <label htmlFor="type">Shady</label>

          <button type="submit">Save</button>
        </div>
      </form>

      <form method="POST" action="/api/condition-filters">
        <div className="box">
          <FontAwesomeIcon className="icon" icon={faDroplet} />
          <input type="checkbox" id="water" value="lotsOfWater" name="water" />
          <label htmlFor="type">Lots of water</label>

          <input type="checkbox" id="water" value="humid" name="water" />
          <label htmlFor="type">Humid</label>

          <input type="checkbox" id="water" value="dry" name="water" />
          <label htmlFor="type">Dry</label>

          <button type="submit">Save</button>
        </div>
      </form>

      <form method="POST" action="/api/condition-filters">
        <div className="box">
          <FontAwesomeIcon className="icon" icon={faEarthEurope} />
          <input type="checkbox" id="soil" value="clay" name="soil" />
          <label htmlFor="type">Clay</label>

          <input type="checkbox" id="soil" value="wellDrained" name="soil" />
          <label htmlFor="type">Well-drained</label>

          <input type="checkbox" id="soil" value="peaty" name="soil" />
          <label htmlFor="type">Peaty</label>

          <input type="checkbox" id="soil" value="chalky" name="soil" />
          <label htmlFor="type">Chalky</label>

          <input type="checkbox" id="soil" value="sandy" name="soil" />
          <label htmlFor="type">Sandy</label>

          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
