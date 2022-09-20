import React,{Component} from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from './components/Map';

export default function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDXc_XVMgtWXeaPvhZVBOFvLGMDMrZaDg8" // API key
  });

  return isLoaded ? <Map /> : null;
}