import React from 'react';
import {View, Text }from 'react-native';

class kamer extends React.Component{
  render(){
   
    const dizi=[];
    for(let i=0; i<=5; i++){
      dizi[i]= '';
      for(let j=0; j<=5-i; j++) 
       dizi[i]+=' ';
       for(let j=0; j<=2; j++) 
      dizi[i]+='';
      for(let j=0; j<=2*i; j++) 
      dizi[i]+='*';
      
    }
    
    
    const yildiz=dizi.reverse();
    yildiz.shift();
    yildiz.forEach(k =>console.log(k));

return <Text></Text>;
  }
}
export default kamer;
