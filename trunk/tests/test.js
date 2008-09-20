z =[];

function test_suite(){if (GBrowserIsCompatible()) {
   tmap = new GMap2(document.getElementById("test_map"));
   GEvent.addListener(tmap, 'click', mapclick);
   tmap.setCenter(new GLatLng(49.833333, 73.166667), 10);

}}

function mapclick(overlay,  latlng,  overlaylatlng){
   if((z.length==2) || (z.length==0)){
   		tmap.clearOverlays();
   		z = [latlng];

   }
   else if(z.length==1){
		z.push(latlng);
		a = new ApproxPolyline(tmap, z,
	                           Math.tan, [-1, 1], 40);
	    console.log(a);
		b = a.get_map_lls();
		c = new GPolyline(b);
		start = new GMarker(b[0]);
		tmap.addOverlay(c);
   }
}

function longsin(x){
	if (x<-Math.PI || x>Math.PI) return 0;
	else return Math.sin(x);
}