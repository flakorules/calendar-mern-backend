const { Router } = require('express');
const { getEventos, crearEvento, actializarEvento, eliminarEvento } = require('../controlers/events');
const { validarJWT } = require('../middlewares/validar-jwt');

const { validarCampos } = require('../middlewares/validar-campos');

const { isDate } = require('../helpers/isDate');

const { check } = require('express-validator');
const router = Router();

router.use(validarJWT);

router.get('/', getEventos);

router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de termino es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento);

router.put('/:id', actializarEvento);

router.delete('/:id', eliminarEvento);

module.exports = router;







