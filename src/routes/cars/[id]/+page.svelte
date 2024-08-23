<script lang="ts">
  export let data;

  const car = JSON.parse(data.car)
</script>

<div>
  <a href="/cars">Back to list</a>

  <h1>{car.name}</h1>
  <p>Model: {car.segment_type}</p>
  <p>Fuel: {car.fuel_type}</p>
</div>