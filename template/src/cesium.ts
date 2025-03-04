import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

let viewer: Cesium.Viewer | null = null

// 初始化Viewer
viewer = new Cesium.Viewer('app', {
  // terrain: Cesium.Terrain.fromWorldTerrain(),
  animation: false,
  timeline: false
})

// 添加示例实体
viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(116.39, 39.9, 100),
  point: {
    color: Cesium.Color.RED,
    pixelSize: 10
  }
})

viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(116.39, 39.9, 300),
  orientation: {
    heading: Cesium.Math.toRadians(0),   // 朝向角
    pitch: Cesium.Math.toRadians(-90),    // 俯视角
    roll: 0
  }
})
