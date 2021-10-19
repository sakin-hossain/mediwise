import React from 'react';
import { Circle, FeatureGroup, LayerGroup, LayersControl, MapContainer, Marker, Popup, Rectangle, TileLayer } from 'react-leaflet';
import "./ContractUs.css";

const ContractUs = () => {
    const center = [51.505, -0.09]
    const rectangle = [
        [51.49, -0.08],
        [51.5, -0.06],
    ]
    return (
        <div>
            <div className="contract__us__tile">
                <h1>Contract Us</h1>
            </div>
            {/* contract us form */}
            <div className="container">
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label htmlFor="specialist">Specialist</label>
                <select id="specialist" name="specialist">
                <option value="eye">Eye</option>
                <option value="ear">Ear</option>
                <option value="medicine">Medicine</option>
                <option value="dental">Dental</option>
                <option value="skin">Skin</option>
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea className="h-24" id="subject" name="subject" placeholder="Write something.."></textarea>

                <input type="submit" value="Submit"/>
            </form>
            </div>
            {/* leaflet map */}
            <div id="mapId">
            <MapContainer center={center} zoom={13} style={{width:'100%', height:'30vh'}} scrollWheelZoom={false}>
                <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.Overlay name="Marker with popup">
                    <Marker position={center}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                </LayersControl.Overlay>
                <LayersControl.Overlay checked name="Layer group with circles">
                    <LayerGroup>
                    <Circle
                        center={center}
                        pathOptions={{ fillColor: 'blue' }}
                        radius={200}
                    />
                    <Circle
                        center={center}
                        pathOptions={{ fillColor: 'red' }}
                        radius={100}
                        stroke={false}
                    />
                    <LayerGroup>
                        <Circle
                        center={[51.51, -0.08]}
                        pathOptions={{ color: 'green', fillColor: 'green' }}
                        radius={100}
                        />
                    </LayerGroup>
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Feature group">
                    <FeatureGroup pathOptions={{ color: 'purple' }}>
                    <Popup>Popup in FeatureGroup</Popup>
                    <Circle center={[51.51, -0.06]} radius={200} />
                    <Rectangle bounds={rectangle} />
                    </FeatureGroup>
                </LayersControl.Overlay>
                </LayersControl>
            </MapContainer>
            </div>
        </div>
    );
};

export default ContractUs;