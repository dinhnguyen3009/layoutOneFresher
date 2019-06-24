import React, { useState } from 'react'
import { View, Image, StyleSheet } from 'react-native'


export function ImageAutoSize(props) {

const [width,setWidth] = useState( props.width||null);
const [height,setHeight] = useState(props.height || null);

const _onLayout= async(event)=>{
    const containerWidth = event.nativeEvent.layout.width

      let info = Image.resolveAssetSource(props.source);
      setHeight((containerWidth * info.height) / info.width)
    }


    return (
      <View
        onLayout={_onLayout.bind(this)}
        style={styles.container}
      >
            <Image
            source={props.source}
            style={[
            props.style,
            {
              width: width,
              height: height
                }
            ]}
            onLoad={props.onLoad}
            onLoadEnd={props.onLoadEnd}
            onLoadStart={props.onLoadStart}
            />
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch'
  }
})
export default ImageAutoSize;