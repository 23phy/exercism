local Hamming = {}

function Hamming.compute(a,b)
  if #a ~= #b then
    return -1
  else
    local distance = 0
    for i = 1, #a do
      if string.sub(a, i, i) ~= string.sub(b, i, i) then
        distance = distance + 1
      end
    end
    return distance
  end
end

return Hamming
