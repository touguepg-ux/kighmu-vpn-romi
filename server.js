const express=require('express');const app=express();app.get('/',(q,r)=>r.send('Kighmu VPN OK'));app.listen(8080,'0.0.0.0')
