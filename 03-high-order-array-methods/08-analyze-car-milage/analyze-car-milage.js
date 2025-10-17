function analyzeCarMileage(cars) {
  const output = cars.reduce((result, car) => {
    result["totalMileage"] = (result["totalMileage"] ?? 0) + car.mileage;
    result["highestMileageCar"] =
      (result["highestMileageCar"]?.mileage ?? 0) < car.mileage
        ? car
        : result["highestMileageCar"];
    result["lowestMileageCar"] =
      (result["lowestMileageCar"]?.mileage ?? Infinity) > car.mileage
        ? car
        : result["lowestMileageCar"];
    return result;
  }, {});

  output["averageMileage"] = parseFloat(
    (output["totalMileage"] / cars.length).toFixed(2)
  );
  output["totalMileage"] = parseFloat(output["totalMileage"].toFixed(2));

  return output;
}

module.exports = analyzeCarMileage;
