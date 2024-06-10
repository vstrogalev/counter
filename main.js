import {setChangeDataListener} from './data/data.js'
import {renderCounter} from './components/counter/renderCounter.js'

renderCounter();
setChangeDataListener(renderCounter);