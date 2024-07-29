import React from 'react';
import './CompareTable.css';
import IMG1 from '../../assets/1.png';

const CompareTable = () => {
  return (
    <div>
      <div className="compare p-70">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="mb-3 mx-auto">Let us show you a complete comparison of all our rides</h2>
          </div>
          <div className="c-table">
            <table className="w-100 h-table">
              <thead>
                <tr>
                  <th></th>
                  <td><img src={IMG1} alt="" />SE03</td>
                  <td><img src={IMG1} alt="" />SE03 Max</td>
                  <td><img src={IMG1} alt="" />SE03 LITE</td>
                </tr>
              </thead>
            </table>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="p-0"></th>
                  <td className="p-0"></td>
                  <td className="p-0"></td>
                  <td className="p-0"></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th data-label="Battery">Battery</th>
                  <td data-label="SE03">2.7Kwh</td>
                  <td data-label="SE03 Max">2.7Kwh</td>
                  <td data-label="SE03 LITE">1.8Kwh</td>
                </tr>
                <tr>
                  <th data-label="Battery features">Battery features</th>
                  <td data-label="SE03">LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
                  <td data-label="SE03 Max">LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
                  <td data-label="SE03 LITE">LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
                </tr>
                <tr>
                  <th data-label="Battery warranty">Battery warranty</th>
                  <td data-label="SE03">3 years</td>
                  <td data-label="SE03 Max">3 years</td>
                  <td data-label="SE03 LITE">3 years</td>
                </tr>
                <tr>
                  <th data-label="Charging time">Charging time</th>
                  <td data-label="SE03">4 hours (12A)</td>
                  <td data-label="SE03 Max">4 hours (12A)</td>
                  <td data-label="SE03 LITE">3 hours (12A)</td>
                </tr>
                <tr>
                  <th data-label="Motor">Motor</th>
                  <td data-label="SE03">1500W</td>
                  <td data-label="SE03 Max">2000W</td>
                  <td data-label="SE03 LITE">1500W</td>
                </tr>
                <tr>
                  <th data-label="Max speed">Max speed</th>
                  <td data-label="SE03">55 km/h</td>
                  <td data-label="SE03 Max">65 km/h</td>
                  <td data-label="SE03 LITE">55 km/h</td>
                </tr>
                <tr>
                  <th data-label="Warranty on electronics">Warranty on electronics</th>
                  <td data-label="SE03">1 year</td>
                  <td data-label="SE03 Max">1 year</td>
                  <td data-label="SE03 LITE">1 year</td>
                </tr>
                <tr>
                  <th data-label="Max range (@30km/h)">Max range (@30km/h)</th>
                  <td data-label="SE03">150 km</td>
                  <td data-label="SE03 Max">120 km</td>
                  <td data-label="SE03 LITE">100 km</td>
                </tr>
                <tr>
                  <th data-label="Max range (@45km/h)">Max range (@45km/h)</th>
                  <td data-label="SE03">110 km</td>
                  <td data-label="SE03 Max">100 km</td>
                  <td data-label="SE03 LITE">90 km</td>
                </tr>
                <tr>
                  <th data-label="Max range (@full speed)">Max range (@full speed)</th>
                  <td data-label="SE03">90 km</td>
                  <td data-label="SE03 Max">80 km</td>
                  <td data-label="SE03 LITE">60 km</td>
                </tr>
                <tr>
                  <th data-label="Other key benefits">Other key benefits</th>
                  <td data-label="SE03">Fire-safe Battery, Range prediction, Comfortable ride, Stable and safe</td>
                  <td data-label="SE03 Max">Fire-safe Battery, Range prediction, Comfortable ride, Stable and safe</td>
                  <td data-label="SE03 LITE">Fire-safe Battery, Range prediction, Comfortable ride, Stable and safe</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareTable;
