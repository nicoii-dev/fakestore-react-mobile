/**
 * Available props:
 *  - width = (any)
 *  - flex  = flex-start, center, flex-end (string)
 *  - count = (number)
 *
 * Note:
 *  - might add some props in the future
 */

 import React from 'react';
 import {
     widthPercentageToDP as wp,
     heightPercentageToDP as hp,
 } from 'react-native-responsive-screen';
 import SkeletonContent from 'react-native-skeleton-content-nonexpo';
 
 const SkeletonUI = (props) => {
     let layout = [];
     for (let index = 0; index < props.count; index++) {
         layout.push({
             key: layout[index],
             width: props.width * .5,
             height: props.height ? props.height : hp('24%'),
             marginBottom: 10,
             marginLeft: 10,
         });
     }
     return (
         <SkeletonContent
             containerStyle={{
                flex: 1,
                width: wp('100%'),
                alignItems: props.flex,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start'
             }}
             isLoading={props.isLoading}
             layout={layout}>
             {props.children}
         </SkeletonContent>
     );
 };
 
 export default SkeletonUI;
 