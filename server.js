const express = require('express');
const cors = require('cors');
const path = require('path');
const { toRoman, toArabic } = require('./conversions');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Rutas API
app.get('/a2r', (req, res) => {
    const { arabic } = req.query;
    
    // Validar que el parámetro existe
    if (!arabic) {
        return res.status(400).json({ error: 'El parámetro "arabic" es requerido' });
    }
    
    // Convertir a número entero
    const num = parseInt(arabic, 10);
    
    // Validar que es un número válido
    if (isNaN(num) || !Number.isInteger(num) || num < 1 || num > 3999) {
        return res.status(400).json({ error: 'El número debe estar entre 1 y 3999' });
    }
    
    const roman = toRoman(num);
    if (roman === null) {
        return res.status(400).json({ error: 'Conversión fallida' });
    }
    
    res.status(200).json({ roman });
});

app.get('/r2a', (req, res) => {
    const { roman } = req.query;
    
    // Validar que el parámetro existe
    if (!roman) {
        return res.status(400).json({ error: 'El parámetro "roman" es requerido' });
    }
    
    // Convertir a mayúsculas
    const romanUpper = roman.toUpperCase();
    
    // Validar formato
    if (!/^[MDCLXVI]+$/.test(romanUpper)) {
        return res.status(400).json({ error: 'Número romano inválido. Solo se permiten: M, D, C, L, X, V, I' });
    }
    
    const arabic = toArabic(romanUpper);
    if (arabic === null || arabic < 1 || arabic > 3999) {
        return res.status(400).json({ error: 'Conversión fallida' });
    }
    
    res.status(200).json({ arabic });
});

// Ruta raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
