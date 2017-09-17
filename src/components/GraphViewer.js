import React from 'react';
import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";
import { GeoJSONLayer } from "react-mapbox-gl";

export class GraphViewer extends React.Component {

  render() {

    const Map = ReactMapboxGl({
      accessToken: "pk.eyJ1Ijoicml0ZXNoZyIsImEiOiJjajdueHpkamwxbzF0Mndwa2U0NHA1YnhnIn0.qBrzfQntHwCS5KuahTY_7g"
    });

    const geojson = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Neighborhood"
          },
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    -121.950235,
                    37.3284630000001
                  ],
                  [
                    -121.9502326,
                    37.3289354
                  ],
                  [
                    -121.9502323,
                    37.3289951
                  ],
                  [
                    -121.950231,
                    37.3292430000001
                  ],
                  [
                    -121.950231,
                    37.3294855
                  ],
                  [
                    -121.950231,
                    37.329915
                  ],
                  [
                    -121.95023,
                    37.3310070000001
                  ],
                  [
                    -121.950234,
                    37.331424
                  ],
                  [
                    -121.9502339,
                    37.331462
                  ],
                  [
                    -121.950233,
                    37.331848
                  ],
                  [
                    -121.95023,
                    37.3325590000001
                  ],
                  [
                    -121.9502271,
                    37.3329078
                  ],
                  [
                    -121.95022,
                    37.3337480000001
                  ],
                  [
                    -121.950228,
                    37.3344930000001
                  ],
                  [
                    -121.950218,
                    37.335518
                  ],
                  [
                    -121.950214,
                    37.3363897
                  ],
                  [
                    -121.950213,
                    37.336626
                  ],
                  [
                    -121.950204,
                    37.337293
                  ],
                  [
                    -121.950205,
                    37.3373824
                  ],
                  [
                    -121.950209,
                    37.3377590000001
                  ],
                  [
                    -121.95021,
                    37.338081
                  ],
                  [
                    -121.949668,
                    37.338084
                  ],
                  [
                    -121.949074,
                    37.3380770000001
                  ],
                  [
                    -121.948205,
                    37.3380770000001
                  ],
                  [
                    -121.947379,
                    37.3380730000001
                  ],
                  [
                    -121.946357,
                    37.33808
                  ],
                  [
                    -121.945526,
                    37.338085
                  ],
                  [
                    -121.944532,
                    37.338088
                  ],
                  [
                    -121.944154,
                    37.338088
                  ],
                  [
                    -121.943559,
                    37.338088
                  ],
                  [
                    -121.943557,
                    37.3377130000001
                  ],
                  [
                    -121.942871,
                    37.3377170000001
                  ],
                  [
                    -121.942,
                    37.337719
                  ],
                  [
                    -121.941329,
                    37.3377180000001
                  ],
                  [
                    -121.9410216,
                    37.33772
                  ],
                  [
                    -121.94087,
                    37.337721
                  ],
                  [
                    -121.940677,
                    37.337729
                  ],
                  [
                    -121.940475,
                    37.337747
                  ],
                  [
                    -121.940307,
                    37.337772
                  ],
                  [
                    -121.940126,
                    37.3378070000001
                  ],
                  [
                    -121.939975,
                    37.337841
                  ],
                  [
                    -121.93983,
                    37.337882
                  ],
                  [
                    -121.939713,
                    37.337924
                  ],
                  [
                    -121.939544,
                    37.3379942
                  ],
                  [
                    -121.939147,
                    37.3381590000001
                  ],
                  [
                    -121.938876,
                    37.3382665
                  ],
                  [
                    -121.938746,
                    37.3383180000001
                  ],
                  [
                    -121.9387149,
                    37.33833
                  ],
                  [
                    -121.938404,
                    37.338449
                  ],
                  [
                    -121.937879,
                    37.338629
                  ],
                  [
                    -121.937713,
                    37.3386780000001
                  ],
                  [
                    -121.937583,
                    37.3387090000001
                  ],
                  [
                    -121.937385,
                    37.338741
                  ],
                  [
                    -121.936658,
                    37.33885
                  ],
                  [
                    -121.936248,
                    37.338916
                  ],
                  [
                    -121.936066,
                    37.338958
                  ],
                  [
                    -121.935722,
                    37.3390640000001
                  ],
                  [
                    -121.935402,
                    37.3391780000001
                  ],
                  [
                    -121.935123,
                    37.338964
                  ],
                  [
                    -121.934809,
                    37.3387070000001
                  ],
                  [
                    -121.93456,
                    37.3384960000001
                  ],
                  [
                    -121.934367,
                    37.3382790000001
                  ],
                  [
                    -121.934056,
                    37.3379210000001
                  ],
                  [
                    -121.933744,
                    37.337474
                  ],
                  [
                    -121.933639,
                    37.3373310000001
                  ],
                  [
                    -121.933496,
                    37.33718
                  ],
                  [
                    -121.933192,
                    37.336886
                  ],
                  [
                    -121.933836,
                    37.3363880000001
                  ],
                  [
                    -121.934726,
                    37.3357
                  ],
                  [
                    -121.9354425,
                    37.3351455000001
                  ],
                  [
                    -121.936159,
                    37.334591
                  ],
                  [
                    -121.936409,
                    37.3344060000001
                  ],
                  [
                    -121.937064,
                    37.33392
                  ],
                  [
                    -121.938158,
                    37.3331000000001
                  ],
                  [
                    -121.938782,
                    37.332631
                  ],
                  [
                    -121.93901,
                    37.332428
                  ],
                  [
                    -121.939265,
                    37.3321940000001
                  ],
                  [
                    -121.939614,
                    37.331821
                  ],
                  [
                    -121.939896,
                    37.331464
                  ],
                  [
                    -121.940119,
                    37.331129
                  ],
                  [
                    -121.940369,
                    37.330653
                  ],
                  [
                    -121.940571,
                    37.3301470000001
                  ],
                  [
                    -121.940703,
                    37.3297030000001
                  ],
                  [
                    -121.940798,
                    37.329149
                  ],
                  [
                    -121.940816,
                    37.3287
                  ],
                  [
                    -121.940811,
                    37.3275620000001
                  ],
                  [
                    -121.940812,
                    37.3271940000001
                  ],
                  [
                    -121.941207,
                    37.3272020000001
                  ],
                  [
                    -121.941849,
                    37.327215
                  ],
                  [
                    -121.942211,
                    37.3272180000001
                  ],
                  [
                    -121.942332,
                    37.327213
                  ],
                  [
                    -121.942455,
                    37.327207
                  ],
                  [
                    -121.942534,
                    37.3271980000001
                  ],
                  [
                    -121.942642,
                    37.327185
                  ],
                  [
                    -121.942815,
                    37.3271540000001
                  ],
                  [
                    -121.943348,
                    37.327053
                  ],
                  [
                    -121.943597,
                    37.3270170000001
                  ],
                  [
                    -121.943783,
                    37.3269930000001
                  ],
                  [
                    -121.94388,
                    37.326981
                  ],
                  [
                    -121.943945,
                    37.3269780000001
                  ],
                  [
                    -121.944196,
                    37.3269740000001
                  ],
                  [
                    -121.944797,
                    37.3269780000001
                  ],
                  [
                    -121.94554,
                    37.326982
                  ],
                  [
                    -121.946397,
                    37.326981
                  ],
                  [
                    -121.94715,
                    37.3269790000001
                  ],
                  [
                    -121.947959,
                    37.326981
                  ],
                  [
                    -121.948971,
                    37.3269790000001
                  ],
                  [
                    -121.949382,
                    37.326983
                  ],
                  [
                    -121.950205,
                    37.3269780000001
                  ],
                  [
                    -121.95022,
                    37.3279200000001
                  ],
                  [
                    -121.950235,
                    37.3284630000001
                  ]
                ]
              ]
            ]
          }
        }
      ]
    }

    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={ [  -121.9443, 37.3347 ]}
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>

        <GeoJSONLayer
          data={geojson}
          fillLayout={{"visibility":"visible"}}
          fillPaint={{"fill-color":"#eeeeee", "fill-opacity":0.5}}
          linePaint={{"line-color":"#000000"}}
          />

      </Map>
    );
  }
}