import { Schemas, engine,GltfContainer,Transform, MeshRenderer, Material, TextShape } from '@dcl/sdk/ecs'
import { Vector3,Quaternion } from '@dcl/sdk/math'

// We use this component to track and group all the cubes.
// engine.getEntitiesWith(Cube)
export const Cube = engine.defineComponent('cube-id', {})

// We use this component to track and group all the cubes.
// engine.getEntitiesWith(Cube)
export const Spinner = engine.defineComponent('spinner', { speed: Schemas.Number })

const femaleStand = engine.addEntity()

GltfContainer.create(femaleStand, {
  src: 'models/Female_Default.glb',
})
Transform.create(femaleStand, {
    position: Vector3.create(14, 0, 2),
    scale: Vector3.create(1, 1, 1),
    rotation: Quaternion.Zero()
})

const femaleTop = engine.addEntity()

GltfContainer.create(femaleTop, {
  src: 'models/Female_Default_UpperBody.glb',
})
Transform.create(femaleTop, {
    position: Vector3.create(12, 0, 2),
    scale: Vector3.create(1, 1, 1),
    rotation: Quaternion.Zero()
})

const femaleBottom = engine.addEntity()

GltfContainer.create(femaleBottom, {
  src: 'models/Female_Default_LowerBody.glb',
})
Transform.create(femaleBottom, {
    position: Vector3.create(11, 0, 2),
    scale: Vector3.create(1, 1, 1),
    rotation: Quaternion.Zero()
})

const maleStand = engine.addEntity()

GltfContainer.create(maleStand, {
  src: 'models/Male_Default.glb',
})
Transform.create(maleStand, {
    position: Vector3.create(2, 0, 2),
    scale: Vector3.create(1, 1, 1),
    rotation: Quaternion.Zero()
})

const maleTop = engine.addEntity()

GltfContainer.create(maleTop, {
  src: 'models/Male_Default_UpperBody.glb',
})
Transform.create(maleTop, {
    position: Vector3.create(4, 0, 2),
    scale: Vector3.create(1, 1, 1),
    rotation: Quaternion.Zero()
})

const maleBottom = engine.addEntity()

GltfContainer.create(maleBottom, {
  src: 'models/Male_Default_LowerBody.glb',
})
Transform.create(maleBottom, {
    position: Vector3.create(5, 0, 2),
    scale: Vector3.create(1, 1, 1),
    rotation: Quaternion.Zero()
})

const defaultHands = engine.addEntity()

GltfContainer.create(defaultHands, {
  src: 'models/Default_Hands.glb',
})
Transform.create(defaultHands, {
    position: Vector3.create(8, 0, 2),
    scale: Vector3.create(1, 1, 1),
    rotation: Quaternion.Zero()
})

const defaultFeet = engine.addEntity()

GltfContainer.create(defaultFeet, {
  src: 'models/Default_Feet.glb',
})
Transform.create(defaultFeet, {
    position: Vector3.create(8, 0, 2),
    scale: Vector3.create(1, 1, 1),
    rotation: Quaternion.Zero()
})

const defaultHead = engine.addEntity()

GltfContainer.create(defaultHead, {
  src: 'models/Default_Head.glb',
})
Transform.create(defaultHead, {
    position: Vector3.create(8, 0, 2),
    scale: Vector3.create(1, 1, 1),
    rotation: Quaternion.Zero()
})

const boundingBox = engine.addEntity()

GltfContainer.create(boundingBox, {
  src: 'models/boundingBox.glb',
})
Transform.create(boundingBox, {
    position: Vector3.create(1, 0, 8),
    scale: Vector3.create(1, 1, 1),
    rotation: Quaternion.fromEulerDegrees(0,90,0)
})

const floor = engine.addEntity()

GltfContainer.create(floor, {
  src: 'models/floor.glb',
})
Transform.create(floor, {
    position: Vector3.create(8, 0, 8),
    scale: Vector3.create(1, 1, 1),
    rotation: Quaternion.Zero()
})


const sign = engine.addEntity()
Transform.create(sign, {
	position: Vector3.create(15, 2, 8),
    scale: Vector3.create(2,2,0),
    rotation: Quaternion.fromEulerDegrees(0,90,0)
})
MeshRenderer.setPlane(sign)
Material.setBasicMaterial(sign, {
    texture: Material.Texture.Common({
      src: "images/sign1.png"
    }),
    
})

const sign2 = engine.addEntity()
Transform.create(sign2, {
	position: Vector3.create(15, 2, 6),
    scale: Vector3.create(2,2,0),
    rotation: Quaternion.fromEulerDegrees(0,90,0)
})
MeshRenderer.setPlane(sign2)
Material.setBasicMaterial(sign2, {
    texture: Material.Texture.Common({
      src: "images/sign2.png"
    }),
    
})

const sign3 = engine.addEntity()
Transform.create(sign3, {
	position: Vector3.create(1, 1.25, 10.5),
    scale: Vector3.create(2,2,0),
    rotation: Quaternion.fromEulerDegrees(0,-90,0)
})
MeshRenderer.setPlane(sign3)
Material.setBasicMaterial(sign3, {
    texture: Material.Texture.Common({
      src: "images/sign3.png"
    }),
    
})

const triCount = engine.addEntity(true)
Transform.create(triCount,{
    position: Vector3.create(15, 3.5, 7), 
    rotation: Quaternion.fromEulerDegrees(0,90,0)
})
TextShape.create(triCount,{
    text: 'Wearable Limitations',
    fontSize: 4,
})

const femaleText = engine.addEntity(true)
Transform.create(femaleText,{
    position: Vector3.create(12.25, 2.5, 2), 
    rotation: Quaternion.fromEulerDegrees(0,180,0)
})
TextShape.create(femaleText,{
    text: 'Female Base',
    fontSize: 4,
    textColor: { r: 1, g: 0, b: 1, a:1 },
})

const neutralText = engine.addEntity(true)
Transform.create(neutralText,{
    position: Vector3.create(8, 2.5, 2), 
    rotation: Quaternion.fromEulerDegrees(0,180,0)
})
TextShape.create(neutralText,{
    text: 'Neutral Base',
    fontSize: 4,
    textColor: { r: 1, g: 1, b: 1, a:1 },
})

const maleText = engine.addEntity(true)
Transform.create(maleText,{
    position: Vector3.create(3.25, 2.5, 2), 
    rotation: Quaternion.fromEulerDegrees(0,180,0)
})
TextShape.create(maleText,{
    text: 'Male Base',
    fontSize: 4,
    textColor: { r: 0, g: 1, b: 1, a:1 },
})

const bounding = engine.addEntity(true)
Transform.create(bounding,{
    position: Vector3.create(1, 3, 8), 
    rotation: Quaternion.fromEulerDegrees(0,270,0)
})
TextShape.create(bounding,{
    text: 'Wearable Bounding Box',
    fontSize: 4,
    textColor: { r: 1, g: 1, b: 0, a:1 },
})