import { Model as ReactModel } from '../components/TechModels/React_logo'
import { Model as JsModel }    from '../components/TechModels/Js-logo'
import { Model as JavaModel }  from '../components/TechModels/Java'
import { Model as PythonModel } from '../components/TechModels/Python'

// cameraZ: distance of camera — higher = smaller model
// scale:   multiplier applied to the raw GLB geometry
// position: [x, y, z] offset to center the model inside the canvas
export const modelConfig = {
  JavaScript: { Component: JsModel,     cameraZ: 5, scale: 30,   position: [0, -1.3, 0] },
  React:      { Component: ReactModel,  cameraZ: 5, scale: 0.7,  position: [0, 0, 0]    },
  Python:     { Component: PythonModel, cameraZ: 5, scale: 0.05, position: [0, 0, 0]    },
  Java:       { Component: JavaModel,   cameraZ: 5, scale: 0.9,  position: [0, -0.5, 0] },
  Angular:    { imgPath: '/images/angular_logo_icon_169595.webp' },
}
