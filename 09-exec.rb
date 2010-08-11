#!/usr/bin/env ruby

3.times do |i|
  puts "out #{i}"
  STDERR.puts "err #{i}"
  sleep 1
end
