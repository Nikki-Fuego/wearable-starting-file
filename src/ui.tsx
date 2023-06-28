import {
  engine,
  Transform,
} from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { Cube } from './components'
import { createCube } from './factory'

const uiComponent = () => (
  <UiEntity
    uiTransform={{
      width: 400,
      height: 30,
      //  { top: 16, right: 0, bottom: 8 left: 270 },
      margin: '16px 0 8px 270px',
      // { top: 4, bottom: 4, left: 4, right: 4 },
      padding: 4,
    }}
  >
    <UiEntity
      uiTransform={{
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
      uiBackground={{ color: Color4.fromHexString("#eeeee") }}
    >
      <Label
        
        value={`Scene made by Nikki Fuego & Doki`}
        fontSize={18}
        uiTransform={{ width: '100%', height: 30 } }
      />
     </UiEntity>
  </UiEntity>
)

function getPlayerPosition() {
  const playerPosition = Transform.getOrNull(engine.PlayerEntity)
  if (!playerPosition) return ' no data yet'
  const { x, y, z } = playerPosition.position
  return `{X: ${x.toFixed(2)}, Y: ${y.toFixed(2)}, z: ${z.toFixed(2)} }`
}

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}