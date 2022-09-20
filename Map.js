import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import cheap from '../cheapdata.json';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { padding } from "@mui/system";
import images from '../download.jpg';
const markers = [
      {
        id: 1,
        name: "Blessed Secretarial Services",
          open: "8am",
          close: "8pm",
          position: { lat: 0.3370125, lng: 32.569484 },
          description: "Printing: @150/=, Colored: 500/=, Binding: 1,500/="
      },
      {
        id: 2,
        name: "DDD Secretarial Bureau",
        open: "8am",
        close: "7pm",
        position: { lat: 0.3369625, lng: 32.5695469 },
        description: "Printing: @150/=, Colored: 500/=, Binding: 1,500/="
      },

      {
        id: 3,
        name: "Nkurumah Yard Printing Station",
        open: "8am",
        close: "7pm",
        position: { lat: 0.3368625, lng: 32.5691406 },
        description: "Printing: @200/=, Colored: 500/=, Binding: 1,500/="
      },
      {
        id: 4,
        name: "Colour Zilla printing station",
        open: "8am",
        close: "7pm",
        position: { lat: 0.3366875, lng: 32.5690781 },
        description: "Printing: @150/=, Colored: 200/="
      },
      {
          id: 5,
          name: "Juma Copiers",
          open: "7am",
          close: "7pm",
          position: { lat: 0.3368125, lng: 32.5689844 },
          description: "Printing: @100/=, Colored: 500/="
      },
      {
          id: 6,
          name: "Northcote Road Printing Station",
          open: "8am",
          close: "6pm",
          position: { lat: 0.3368375, lng: 32.5689844 },
          description: "Printing: @200/=, Colored: 500/="
      },
      {
        id: 7,
        name: "Asbat Group Ltd",
        open: "Opens at 8am",
        close: "Closes at 7pm",
        position: { lat: 0.3336, lng: 32.5718 },
        description: "Printing: @50/=, Research: Negotiable, Education: Negotiable"
    },
    {
        id: 8,
        name: "Asbat Group Ltd",
        open: "Opens at 8am",
        close: "Closes at 9pm",
        position: { lat: 0.3330, lng: 32.5723 },
        description: "Printing: @50/=, Binding: 1,500/=, Laminating: 1000"
    },
    {
        id: 9,
        name: "Printing Point",
        open: "Opens at 8am",
        close: "Closes at 7pm",
        position: { lat: 0.3327, lng: 32.5724 },
        description: "Printing: @50/=, Binding: 1,500/=,Scanning: 500/="
    },
    {
        id: 10,
        name: "Mitchell Printers Ltd",
        open: "Opens at 8am",
        close: "Closes at 9pm",
        position: { lat: 0.3333, lng: 32.5703 },
        description: "Printing: @50/=, Photocpying: @50/=, Scanning: @500/="
    }
  ];


function Map() {
  const [activeMarker, setActiveMarker] = useState(null);
  const [result_markers, setResultMarkers] = useState(markers);
  const [search_in, setSearch] = useState('');

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
  	var bounds;
    // eslint-disable-next-line no-undef
    bounds = new google.maps.LatLngBounds();
    result_markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  {/*const handle_input = (e) => {
    setSearch(e.target.value)
  }

  const search = (e) => {
    console.log(search_in)
    const search = result_markers.filter((instance) => instance.name.includes(search_in))
    if(search.length > 0){
      setResultMarkers(search)
    }else{
      setResultMarkers(markers)
    }*/
  }




  return (
    <>
    <div className="logo">
      <h1>Makerere University</h1>
      <small>Printing Servcies locator</small>
    </div>
    
    
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'right' }}
      
    >
      
      <Button 
        variant="contained" sx={{ mx: '50px', p: '5px', display: 'flex'}}
        onClick={()=>{
          
        }}
      >Cheapest</Button>
      
      {/*<IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        value={search_in}
        onChange={handle_input}
        placeholder="Search Printing Station"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton onClick={search} type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
  </IconButton>*/}
      <Button variant="contained" sx={{ mx: '50px', p: '5px', display: 'flex'}}>Nearest</Button>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  <Paper>
    
  </Paper>
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      center={{lat:  0.3366875, lng: 32.5690781 }}
      zoom={15}
      mapContainerStyle={{ width: "100vw", height: "100vh" }}
    >
      {result_markers.map(({ id, name, position, description }) => (
        <Marker
          key={id}
          position={position}
          visible={true}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClicdescriptionk={() => setActiveMarker(null)}>
              <div>{name}<br/>{description}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
    </>
  );
}

export default Map;
